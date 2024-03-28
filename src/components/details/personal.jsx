import { useState } from 'react';

export default function PersonalDetails({ data, setData }) {
  const [showMore, setShowMore] = useState(true);
  return (
    <section className="personal-details" title="Personal Details">
      <button
        type="button"
        className="section-head"
        onClick={() => setShowMore(!showMore)}
      >
        <h3>
          Personal Details
          <span aria-hidden="true">{showMore ? '\u{25B2}' : '\u{25BC}'}</span>
        </h3>
      </button>
      {showMore && (
        <form className="section-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="niche">Niche</label>
            <input
              type="text"
              id="niche"
              value={data.niche}
              onChange={(e) => setData({ ...data, niche: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              value={data.website}
              onChange={(e) => setData({ ...data, website: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="profile">Profile</label>
            <textarea
              id="profile"
              value={data.profile}
              onChange={(e) => setData({ ...data, profile: e.target.value })}
            />
          </div>
        </form>
      )}
    </section>
  );
}
