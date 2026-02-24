export async function getBooksAction() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
    if (!response.ok) {
      throw new Error("Error retrieving books");
    }
    return response.json();
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function getBookAction(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${slug}`,
    );
    if (!response.ok) {
      throw new Error("Error retrieving books");
    }
    return response.json();
  } catch (error: unknown) {
    console.error(error);
  }
}
