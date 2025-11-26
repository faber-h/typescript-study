// 공통으로 여러 컴포넌트에서 사용되는 타입
// 유지보수성을 높이기 위해 별도의 파일로 분리
// export 키워드로 내보내기
export interface Todo {
  id: number;
  content: string;
}
