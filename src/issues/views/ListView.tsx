import { useState } from 'react';
import { Loader } from '../../shared/components/Loader';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';
import { State } from '../models';

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const {
    issuesQuery,
    page,
    nextPage,
    prevPage,
  } = useIssues({
    state,
    selectedLabels
  })

  const issues = issuesQuery.data ?? [];

  const onLabelSelected = (label: string) => {
    selectedLabels.includes(label)
    ? setSelectedLabels(selectedLabels.filter(item => item !== label))
    : setSelectedLabels([...selectedLabels, label])
  }

  return (
    <div className="grid grid-cols-1 mt-5 sm:grid-cols-3">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading
          ? <Loader/>
          : (
            <>
              <IssueList
                issues={issues}
                onStateChange={setState}
                state={state}
              />
              <div className='flex items-center justify-between'>
                <button 
                onClick={prevPage}
                className='p-2 transition-all bg-blue-500 rounded-md hover:bg-blue-700'>
                  Anteriores
                </button>
                <span>{page}</span>
                <button onClick={nextPage} className='p-2 transition-all bg-blue-500 rounded-md hover:bg-blue-700'>
                  Siguientes
                </button>
              </div>
            </>
          )
          }
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          onLabelSelected={onLabelSelected}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};
