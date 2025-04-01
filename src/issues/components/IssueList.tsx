import { GitHubIssue } from '../models';
import { IssueItem } from './IssueItem';

interface Props {
  issues: GitHubIssue[]
}

export const IssueList = ({ issues }: Props) => {

  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4 animate-fadeIn">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
