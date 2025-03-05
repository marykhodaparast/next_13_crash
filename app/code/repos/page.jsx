import Link from "next/link";
import { FaStar, FaCode, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/marykhodaparast/repos');
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos)

  return <div className="repos-container">
    <h2>Repositories</h2>
    <ul className="repo-list">
      {repos.map((repo) => {
        <li key={repo.id}>
          <Link href={repo.html_url}></Link>
        </li>
      })}
    </ul>
  </div>;
};

export default ReposPage;
