export enum ErrorCode {
  "E1" = "차트를 보여줄 수 있는 데이터가 없음",

  // TODO: 한글이랑 에러 코드 위치를 어떻게 정할지 논의
  // "E1" = '차트를 보여줄 수 있는 데이터가 없음'
}

class ChartError extends Error {
  errorCode: ErrorCode;

  constructor(statusCode: ErrorCode, message?: string) {
    super(message);
    this.name = `ChartError`;
    this.errorCode = statusCode;
  }
}

export default ChartError;
