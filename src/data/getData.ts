export async function getData(endPoint: string) {
  const res = await fetch(`http://localhost:1337/api/${endPoint}`, {
    headers: {
      authorization:
        "bearer f3add21d85e866f7aae5e5838d27ad53daa9b18db4b15f24dfd1b221f9be58543e2c872e1c777f2710d8fb0979ab28ef50dad7647702f4f7b0981f49351525ea1f0943256beaa0c34b2d66fed3a1816ca07591b10b4d094778c35930ca48ed794a5e89589ad669a51026b5ef571e3273ff066c77187e91046a4854304687152c"
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
