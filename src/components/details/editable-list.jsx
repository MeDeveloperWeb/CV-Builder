import { useState } from 'react';

export default function EditableList({ data, setData, name }) {
  const [inEdit, setInEdit] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const addMore = () => {
    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const newVal = formData.get(name);

      if (!data.includes(newVal)) setData([...data, newVal]);

      setInEdit(false);
    };
    return (
      <form className={name + '-input'} onSubmit={(e) => handleSubmit(e)}>
        <input type="text" aria-label={name} name={name} autoFocus />
        <input type="submit" value="&#10003;" className="icon icon-tick" />
        <input
          type="reset"
          value="&#10006;"
          className="icon icon-delete"
          aria-label="Cancel"
          onClick={() => setInEdit(null)}
        />
      </form>
    );
  };

  const deleteVal = (val) => {
    const i = data.indexOf(val);

    if (i < 0) throw Error('Value does not exist!');

    const newData = [...data];

    newData.splice(i, 1);

    setData(newData);
  };

  return (
    <section
      className={name + '-list ' + name + '-details'}
      title={name + ' List'}
    >
      <button
        type="button"
        className="section-head"
        onClick={() => setShowMore(!showMore)}
      >
        <h3>
          {name}{' '}
          <span aria-hidden="true">{showMore ? '\u{25B2}' : '\u{25BC}'}</span>
        </h3>
      </button>
      {showMore && (
        <>
          <ul className="section-list-cont">
            {data.map((val) => (
              <li key={val}>
                <span id={val}>{val}</span>

                <button
                  aria-label={'Delete' + val}
                  type="button"
                  onClick={() => deleteVal(val)}
                  className="icon icon-delete"
                >
                  &#10006;
                </button>
              </li>
            ))}
          </ul>

          {inEdit ? (
            addMore()
          ) : (
            <button type="button" onClick={() => setInEdit(true)}>
              + Add more
            </button>
          )}
        </>
      )}
    </section>
  );
}
