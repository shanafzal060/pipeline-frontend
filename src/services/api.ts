export interface DemoRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

export interface DemoResponse {
  success: boolean;
  message: string;
  demoId?: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001";

export const submitDemo = async (data: DemoRequest): Promise<DemoResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Failed to submit demo request");
  }

  return response.json();
};
