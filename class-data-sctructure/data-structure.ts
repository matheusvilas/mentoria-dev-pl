type RequestStudent = {
  name: string;
  age: number;
};

export async function requestStudentFromServer(): Promise<RequestStudent[]> {
  return new Promise((resolve) => {
    resolve([{ name: "some name", age: 23 }]);
  });
}
