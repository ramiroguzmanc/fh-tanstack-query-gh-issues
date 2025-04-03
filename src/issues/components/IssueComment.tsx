import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { GitHubIssue } from '../models';

interface Props {
  issue: GitHubIssue;
}

export const IssueComment: FC<Props> = ({ issue }) => {
  return (
    <div className="w-full">
      <div className="mt-2 border border-gray-200 rounded-md shadow-sm">
        <div className="flex items-center p-2 text-white bg-blue-500 rounded-t-md">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="mx-2">{issue.user.login} commented</span>
        </div>
        <div className="p-4 text-white bg-gray-700">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
