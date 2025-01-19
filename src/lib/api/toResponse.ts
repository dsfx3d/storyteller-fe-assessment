export const toResponse =
  (status = 200) =>
  (data: unknown) =>
    new Response(JSON.stringify(data), {
      status,
      headers: {"Content-Type": "application/json"},
    });
