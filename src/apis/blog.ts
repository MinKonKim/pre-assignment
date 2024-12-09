import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { ApiResponse } from "../types/api";
import { BlogPostType } from "../types/blog";

// 블로그 포스트 추가 함수
export const addBlogPost = async (
  title: string,
  content: string
): Promise<ApiResponse<string>> => {
  try {
    const blogPost: Omit<BlogPostType, "id" | "createdAt"> = { title, content };
    const docRef = await addDoc(collection(db, "blog"), {
      ...blogPost,
      createdAt: Timestamp.fromDate(new Date()), // Firestore Timestamp 사용
    });

    return {
      message: "포스트가 성공적으로 추가되었습니다.",
      success: true,
      data: docRef.id, // 추가된 문서의 ID 반환
    };
  } catch (error) {
    console.error("블로그 포스트 추가 중 오류 발생:", error);
    return {
      message: "현재 포스트 등록은 불가합니다.",
      success: false,
    };
  }
};

// 블로그 포스트 삭제 함수
export const deleteBlogPost = async (
  postId: string
): Promise<ApiResponse<null>> => {
  try {
    const docRef = doc(db, "blog", postId);
    await deleteDoc(docRef);

    return {
      message: "블로그 포스트가 성공적으로 삭제되었습니다.",
      success: true,
    };
  } catch (error) {
    console.error("블로그 포스트 삭제 중 오류 발생:", error);
    return {
      message: "블로그 포스트 삭제에 실패했습니다.",
      success: false,
    };
  }
};

// 블로그 포스트 가져오기 함수
export const getBlogPosts = async (): Promise<ApiResponse<BlogPostType[]>> => {
  try {
    const blogCollection = collection(db, "blog");
    const blogQuery = query(blogCollection);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(blogQuery);

    // 데이터 변환
    const blogPosts: BlogPostType[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // 문서 ID 추가
      title: doc.data().title,
      content: doc.data().content,
      createdAt: doc.data().createdAt as Timestamp, // Firestore Timestamp 유지
    }));

    return {
      success: true,
      message: "블로그 포스트를 성공적으로 가져왔습니다.",
      data: blogPosts,
    };
  } catch (error) {
    console.error("포스트 가져오는 중 에러 발생.", error);
    return {
      success: false,
      message: "블로그 포스트를 가져오는데 실패했습니다.",
    };
  }
};
