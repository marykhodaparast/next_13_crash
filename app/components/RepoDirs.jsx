async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/marykhodaparast/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  return <div>RepoDirs</div>;
};

export default RepoDirs;
