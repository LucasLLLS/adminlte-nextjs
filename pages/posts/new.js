import { useState } from 'react';
import Layout from '../../components/Layout';
import SmartInput from '../../components/SmartInput';

const NewPost = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Layout title="Novo Post">
      <div>
        <div className="box box-primary">
          <div className="row">
            {formState.title}
            <div className="col-sm-6">
              <SmartInput
                label="Título"
                name="title"
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewPost;
