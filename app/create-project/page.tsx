import { Modal } from '@/components/Modal/Modal';
import { ProjectForm } from '@/components/ProjectForm/ProjectForm';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const CreateProject = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect('/');

  return (
    <>
      <Modal>
        <h3 className='modal-head-text'>Create a new project</h3>
        <ProjectForm type='create' />
      </Modal>
    </>
  );
};

export default CreateProject;
