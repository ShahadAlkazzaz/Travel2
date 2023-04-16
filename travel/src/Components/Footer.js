import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className='footer'>
<MDBFooter className='text-center text-lg-start ' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://twitter.com/?lang=sv'  className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/?lang=sv'  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://twitter.com/?lang=sv' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://twitter.com/?lang=sv'  className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="globe-americas" className="me-3" />
               SkyTour
              </h6>
              <p>
              Skytour is a reputable travel company that offers custom travel experiences.
              </p>
            </MDBCol>



            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Stockholm , Sweden
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@SkyTour.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        © 2023 Copyright: SkyTour.

      </div>
    </MDBFooter>
        </div>
    )
}

export default Footer
