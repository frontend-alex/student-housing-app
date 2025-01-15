import { useEffect } from 'react';

const useSyncTasksToLocalStorage = (userTasks: any[]) => {
  useEffect(() => {
    if (userTasks && userTasks.length > 0) {
      localStorage.setItem('userTasks', JSON.stringify(userTasks));
    }
  }, [userTasks]); 
};

export default useSyncTasksToLocalStorage;
