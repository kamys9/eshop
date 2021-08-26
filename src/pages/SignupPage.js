import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import SignUp from '../components/register'



const SignupPage = () => {
  return <main>
    <PageHero title="signup" />
    <Wrapper className="page section section-center">
        <div className="section-center">
        <SignUp/>
        </div>
      
      
      

    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default SignupPage
