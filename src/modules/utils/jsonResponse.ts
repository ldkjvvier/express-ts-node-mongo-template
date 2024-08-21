export const jsonResponse = (statusCode: number, body: unknown) => {
  return {
    statusCode,
    body
  }
}
