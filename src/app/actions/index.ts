/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function createUser(prevState: any, formData: FormData) {
    const fromData = new FormData();
    fromData.append("data", {email: formData.get("email"), password: formData.get("password")} as any);
    formData.append("image", formData.get("image") as any);

  try {
    const response = await fetch("http://localhost:5000/api/v1/users/create-user", {
      method: "POST",
      body: fromData,
    });
    const datas = await response.json();
    return { message: datas.message };
  } catch (error: any) {
    return { message: error?.message };
  }
}
