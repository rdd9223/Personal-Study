const API_ENDPOINT = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const getData = async (nodeId) => {
  try {
    const data = await fetch(`${API_ENDPOINT}/${nodeId || ""}`);
    if (!data) {
      return new Error("데이터가 없습니다.");
    }

    return await data.json();
  } catch (e) {
    throw new Error("Fetch실패:", e.message);
  }
};
