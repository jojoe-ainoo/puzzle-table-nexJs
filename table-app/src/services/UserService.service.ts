export const login = async (username: string, password: string) => {
  // Simulate user login by validating the username and password
  if (username === "user1" && password === "password1") {
    return true;
  }
  return false;
};

export async function logout(): Promise<void> {
  // Simulate the logout process
  // Delay for 1 second to simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
