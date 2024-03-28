import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function EducationDetails({ data, setData }) {
  const [inEdit, setInEdit] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const form = (eduData = {}) => {
    const addInstitution = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      console.log(Object.fromEntries(formData));

      const newData = [...data];

      const newFirm = {
        degree: formData.get('degree'),
        institution: formData.get('institution'),
        start: formData.get('start'),
        end: formData.get('end')
      };

      if (formData.get('id')) {
        const oldFirmDetails = data.find((e) => e.id === formData.get('id'));

        if (oldFirmDetails) Object.assign(oldFirmDetails, newFirm);
      } else {
        newFirm.id = uuidv4();
        newData.push(newFirm);
      }

      setData(newData);

      setInEdit(null);
    };
    const form = (
      <form className="section-form" onSubmit={(e) => addInstitution(e)}>
        <input type="hidden" name="id" defaultValue={eduData.id || ''} />
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            required
            type="text"
            name="degree"
            id="degree"
            defaultValue={eduData.degree || ''}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <input
            required
            type="text"
            name="institution"
            id="institution"
            defaultValue={eduData.institution || ''}
          />
        </div>
        <div>
          <label htmlFor="start">Start Date:</label>
          <input
            required
            type="text"
            id="start"
            name="start"
            defaultValue={eduData.start || ''}
          />
        </div>
        <div>
          <label htmlFor="end">End Date:</label>
          <input
            required
            type="text"
            id="end"
            name="end"
            defaultValue={eduData.end || ''}
          />
        </div>
        <input type="submit" defaultValue="Submit" />
        <input type="reset" value="Cancel" onClick={() => setInEdit(null)} />
      </form>
    );

    return form;
  };

  const deleteEducation = (id) => {
    const i = data.findIndex((e) => e.id === id);

    if (i < 0) throw Error('Value does not exist!');

    const newData = [...data];

    newData.splice(i, 1);

    setData(newData);
  };

  return (
    <section className="education-details" title="Education Details">
      <button
        type="button"
        className="section-head"
        onClick={() => setShowMore(!showMore)}
      >
        <h3>
          Education Details{' '}
          <span aria-hidden="true">{showMore ? '\u{25B2}' : '\u{25BC}'}</span>
        </h3>
      </button>
      {showMore &&
        (inEdit ? (
          form(inEdit)
        ) : (
          <>
            <ul className="edu-preview section-list-cont">
              {data.map((e) => (
                <li key={e.id}>
                  <span>{e.institution}</span>
                  <button
                    aria-label={'Edit ' + e.institution}
                    type="button"
                    onClick={() => setInEdit(e)}
                    className="icon icon-edit"
                  >
                    &#x270d;
                  </button>
                  <button
                    aria-label={'Delete' + e.institution}
                    type="button"
                    onClick={() => deleteEducation(e.id)}
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
