import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ExperienceDetails({ data, setData }) {
  const [inEdit, setInEdit] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const form = (expData = {}) => {
    const addExperience = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const newData = [...data];

      const newExperience = {
        start: formData.get('start'),
        end: formData.get('end'),
        firm: formData.get('firm'),
        address: formData.get('address'),
        position: formData.get('position'),
        job_details: formData.get('job_details').split('\n')
      };

      if (formData.get('id')) {
        const oldExperience = data.find((exp) => exp.id === formData.get('id'));
        if (oldExperience) {
          Object.assign(oldExperience, newExperience);
        }
      } else {
        newExperience.id = uuidv4();
        newData.push(newExperience);
      }

      setData(newData);

      setInEdit(null);
    };

    const form = (
      <form className="section-form" onSubmit={(e) => addExperience(e)}>
        <input type="hidden" name="id" defaultValue={expData.id || ''} />
        <div>
          <label htmlFor="start">Start Date:</label>
          <input
            required
            type="text"
            id="start"
            name="start"
            defaultValue={expData.start || ''}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="end">End Date:</label>
          <input
            required
            type="text"
            id="end"
            name="end"
            defaultValue={expData.end || ''}
          />
        </div>
        <div>
          <label htmlFor="firm">Firm:</label>
          <input
            required
            type="text"
            id="firm"
            name="firm"
            defaultValue={expData.firm || ''}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            required
            type="text"
            id="address"
            name="address"
            defaultValue={expData.address || ''}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            required
            type="text"
            id="position"
            name="position"
            defaultValue={expData.position || ''}
          />
        </div>
        <div>
          <label htmlFor="job_details">Job Details:</label>
          <textarea
            id="job_details"
            name="job_details"
            defaultValue={
              expData.job_details?.reduce((prev, curr) => prev + '\n' + curr) ||
              ''
            }
          />
        </div>
        <input type="submit" defaultValue="Submit" />
        <input type="reset" value="Cancel" onClick={() => setInEdit(null)} />
      </form>
    );

    return form;
  };

  const deleteExperience = (id) => {
    const i = data.findIndex((e) => e.id === id);

    if (i < 0) throw Error('Value does not exist!');

    const newData = [...data];

    newData.splice(i, 1);

    setData(newData);
  };

  return (
    <section className="experience-details" title="Experience Details">
      <button
        type="button"
        className="section-head"
        onClick={() => setShowMore(!showMore)}
      >
        <h3>
          Experience Details
          <span aria-hidden="true">{showMore ? '\u{25B2}' : '\u{25BC}'}</span>
        </h3>
      </button>
      {showMore &&
        (inEdit ? (
          form(inEdit)
        ) : (
          <>
            <ul className="exp-preview section-list-cont">
              {data.map((exp) => (
                <li key={exp.id}>
                  <span>{exp.firm}</span>
                  <button
                    aria-label={'Edit ' + exp.firm}
                    type="button"
                    onClick={() => setInEdit(exp)}
                    className="icon icon-edit"
                  >
                    &#x270d;
                  </button>
                  <button
                    aria-label={'Delete' + exp.firm}
                    type="button"
                    onClick={() => deleteExperience(exp.id)}
                    className="icon icon-delete"
                  >
                    &#10006;
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setInEdit({})}>
              + Add more
            </button>
          </>
        ))}
    </section>
  );
}
