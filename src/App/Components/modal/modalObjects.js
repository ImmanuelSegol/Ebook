import uuidv1 from 'uuid/v1';
import FormModal from './formModal';

const formModalConfig = command => (
    {
        id: uuidv1(),
        content: <FormModal />
    }
)