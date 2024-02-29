import React from 'react'

import Layout from '../components/Layout/Layout'
import Upload from './Upload';

const Myshop = () => {
    return (
      <Layout>
      <div className="row">
        <section className='col-2 col-md-1 '>
          <div className='container-xl'>
            <div style={{ marginTop: '130px' }} className='main-banner-content position-absolute text-center'>
              <Upload />
            </div>
          </div>
        </section>
        
      </div>
    </Layout>
    


    
      );
}

export default Myshop