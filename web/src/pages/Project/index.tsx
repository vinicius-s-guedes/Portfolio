import React,{useState} from 'react';
import './styles.css';

const Project =()=>{
  const [readmeAtivo, setReadmeAtivo] = useState<boolean>(true);


    function popReadme(){
                setReadmeAtivo(!readmeAtivo);

    }

  return(

  <>
<div className="projectpage">
  <div id="box" className={(readmeAtivo) ? 'box b1' : 'box b2'}>
      <h1>Goof Joob</h1>

    <a onClick={popReadme}className="closed" href="#">closed</a>
  </div>






      <ol className="d-flex flex-wrap gutter-condensed" >

        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div>
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a  onClick={popReadme} >
                  gohugoio
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                
               
                  <span >JavaScript</span>

              </p>
            </div>
          </div>
        </li>


        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div className="">
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a className=""  href="/gohugoio/hugo">
                  <span className="" title="gohugoio">gohugoio</span>
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                <span className="">

                  <span >Go</span>
                </span>

           
              </p>
            </div>
          </div>
        </li>

        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div className="">
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a className=""  href="/gohugoio/hugo">
                  <span className="" title="gohugoio">gohugoio</span>
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                <span className="">
                  <span>Go</span>
                </span>

           
              </p>
            </div>
          </div>
        </li>

        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div className="">
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a className=""  href="/gohugoio/hugo">
                  <span className="" title="gohugoio">gohugoio</span>
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                <span className="">
                  <span >Go</span>
                </span>

           
              </p>
            </div>
          </div>
        </li>


        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div className="">
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a className=""  href="/gohugoio/hugo">
                  <span className="" title="gohugoio">gohugoio</span>
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                <span className="">
                  <span >Go</span>
                </span>

           
              </p>
            </div>
          </div>
        </li>


        <li className="col-md-6 mb-3 d-flex">
          <div className="Box  d-flex p-3 width-full" >
            <div className="">
              <div className="d-flex width-full flex-items-center">
                <svg className="octicon mr-2 text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                </svg>
                <a className=""  href="/gohugoio/hugo">
                  <span className="" title="gohugoio">gohugoio</span>
                </a>        
              </div>


              <p className="text-gray text-small mt-2 mb-3">
                The world’s fastest framework for building websites.
              </p>

              <p className="mb-0 f6 text-gray">
                <span className="">
                
                  <span >Go</span>
                </span>

           
              </p>
            </div>
          </div>
        </li>


      </ol>




</div>

    </>

    )
}

export default Project;