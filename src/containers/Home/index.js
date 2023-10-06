import BaseButton from '../../components/Button/Button';

import securityBanner from '../../assets/securityBanner.jfif';
import rectangle from '../../assets/rectangle.png';
import contruction from '../../assets/contruction.png';
import Navbar from '../../components/Button/Navbar';

function Home() {
  return (
    <>
      <div className='min-h-full mt-2 mb-2'>
        <Navbar />
        <main>
          {/* max-w-7xl py-6 sm:px-6 lg:px-8 */}
          <div className='mx-auto relative'>
            <img className='w-screen h-auto mt-3' src={securityBanner} alt='Security banner' />
            <div className='w-106 h-48 absolute top-16 left-24 px-12 py-2'>
              <div className=' text-white text-6xl font-bold '>
                Security Services for
                <br />
                Rent: Peace of Mind
                <br />
                for Your Safety
              </div>
              <BaseButton className='w-60 h-14 px-3 py-4 mt-6 items-center inline-flex' content={'GET STARTED'} />
              <BaseButton
                className='w-36 h-14 px-3 py-4 px-3 py-4 mt-2 ml-4 items-center inline-flex bg-gray-500'
                content={'LEARN MORE'}
              />
            </div>
          </div>
          <div class='bg-white flex-col justify-start items-start '>
            <div class='flex-col justify-start items-center gap-16 flex'>
              <div class='h-44 flex-col justify-start items-start gap-5 flex'>
                <div class='w-24 h-24 relative'></div>
                <div class='text-center text-black text-5xl font-bold'>Select Your Plan and Enjoy</div>
              </div>
              <div class='w-96 h-96 relative'>
                <div class='w-96 left-0 top-0 absolute justify-center items-start gap-16 inline-flex'>
                  <div class='grow shrink basis-0 p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                    <img class='w-96 h-96' src={rectangle} />
                    <div class='h-60 flex-col justify-start items-start gap-6 flex'>
                      <div class='self-stretch text-center text-slate-900 text-3xl font-bold'>Security Personnel</div>
                      <div class='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                        From bodyguards, to events, businesses and static security, we’ll provide the right manned
                        security service and personnel tailored for you.
                      </div>
                      <div class='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
                        <BaseButton
                          className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold'
                          content={'GET STARTED'}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='grow shrink basis-0 p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                    <img class='w-96 h-96' src={contruction} />
                    <div class='h-60 flex-col justify-start items-start gap-6 flex'>
                      <div class='self-stretch text-center text-slate-900 text-3xl font-bold'>
                        Construction Security
                      </div>
                      <div class='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                        Building sites can be a target for theft. Talk to us about keeping your construction site safe
                        and secure with a tailored security solution.
                      </div>
                      <div class='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
                        <BaseButton
                          className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold'
                          content={'GET STARTED'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
