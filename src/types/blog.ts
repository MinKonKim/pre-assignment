import { Timestamp } from "firebase/firestore";

export interface BlogPostType {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp; // Firestore Timestamp 타입
}
