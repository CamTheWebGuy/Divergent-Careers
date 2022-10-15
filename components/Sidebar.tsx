import React from 'react';

const Sidebar = () => {
  return (
    <div className='filters-menu col-span-3 hidden sm:block'>
      <div className='job-type mt-3'>
        <h3 className='font-bold'>Job Type:</h3>
        <div>
          <label>
            <input type='checkbox' name='fulltime' id='' /> Full-Time
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' name='parttime' id='' /> Part-Time
          </label>
        </div>
        <div>
          {' '}
          <label>
            <input type='checkbox' name='contract' id='' /> Contract
          </label>
        </div>

        <div className='job-location mt-2'>
          <h3 className='font-bold'>Job Location:</h3>
          <div>
            <label>
              <input type='checkbox' name='fulltime' id='' /> On-Site
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='fulltime' id='' /> Remote
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='fulltime' id='' /> Hybrid
            </label>
          </div>
        </div>
        <div className='job-skill mt-2'>
          <h3 className='font-bold'>Skill Level:</h3>
          <div>
            <label>
              <input type='checkbox' name='noExperience' id='' /> No Experience
              Required
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='entry' id='' /> Entry Level
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='midlevel' id='' /> Mid Level
            </label>
          </div>

          <div>
            <label>
              <input type='checkbox' name='senior' id='' /> Senior Level
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
