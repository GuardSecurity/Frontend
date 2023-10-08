import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import BaseButton from '../../components/Button';

import logo from '../../assets/logo.png';
import securityBanner from '../../assets/securityBanner.jfif';
import rectangle from '../../assets/rectangle.png';
import construction from '../../assets/construction.png';
import slackLogo from '../../assets/slackLogo.png';
import figmaLogo from '../../assets/figmaLogo.png';
import microsoftLogo from '../../assets/microsoftLogo.png';
import hupspotLogo from '../../assets/hupspotLogo.png';
import outreachLogo from '../../assets/outreachLogo.png';
import googleLogo from '../../assets/googleLogo.png';
import padlock from '../../assets/padlock.png';
import star from '../../assets/star.png';
import users from '../../assets/users.png';
import periscope from '../../assets/periscope.png';
import tryStaffBanner from '../../assets/tryStaffBanner.png';
import quote from '../../assets/quote.png';
import sontungAvatar from '../../assets/sontungAvatar.png';
import stijnAvatar from '../../assets/stijnAvatar.png';
import BodyguardServicesSydney from '../../assets/BodyguardServicesSydney.png';
import Navbar from '../../components/Button/Navbar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SecurityAdvantageCard = ({ srcImg, title, description }) => {
  return (
    <div class='grow shrink basis-0 px-4 flex-col justify-start items-center gap-4 inline-flex'>
      <div class='self-stretch flex-col justify-start items-center gap-6 flex'>
        <img class='object-cover' src={srcImg} alt='Security Advantage' />
        <div class='self-stretch h-6 text-center text-black text-2xl font-extrabold leading-loose'>
          {title || ''}
          <br />
        </div>
        <div class='self-stretch text-center text-zinc-800 text-opacity-70 text-lg font-normal leading-relaxed'>
          {description || ''}
        </div>
      </div>
    </div>
  );
};

const CustomCard = ({ content, customerAvatar, customerPosition, customerName, classExtend }) => {
  return (
    <div
      class={`w-80 px-8 py-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-2.5 inline-flex ${classExtend}`}
    >
      <div class='self-stretch h-64 flex-col justify-start items-start gap-5 flex'>
        <img src={quote} alt='Quote' />
        <span class='text-black text-base font-normal leading-snug'>{content || ''}</span>
        <div class='self-stretch justify-start items-center gap-4 inline-flex'>
          <img src={customerAvatar} alt='Customer avatar' />
          <div class='grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex'>
            <div class='w-56 text-[#C7923E] text-xs font-bold uppercase '>{customerPosition || ''}</div>
            <div class='w-56 text-black text-base font-bold'>{customerName || ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              <div className=' text-white text-5xl font-bold '>
                Security Services for
                <br />
                Rent: Peace of Mind
                <br />
                for Your Safety
              </div>
              <BaseButton
                className='w-60 h-14 px-3 py-4 mt-6 items-center inline-flex bg-[#C7923E]'
                content={
                  <>
                    <p>GET STARTED</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3}
                      stroke='currentColor'
                      className='w-4 h-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
                    </svg>
                  </>
                }
              />
              <BaseButton
                className='w-36 h-14 px-3 py-4 mt-2 ml-4 items-center inline-flex bg-[#6C757D]'
                content={'LEARN MORE'}
              />
            </div>
          </div>
          <div class='bg-white pb-36'>
            <div class='flex-col justify-start items-center gap-16 flex'>
              <div class='h-44 flex-col justify-start items-start gap-5 flex'>
                <div class='w-24 h-24 relative'></div>
                <div class='text-center text-black text-5xl font-bold'>Select Your Plan and Enjoy</div>
              </div>
              <div class='w-96 justify-center items-start gap-16 inline-flex'>
                <div class='p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                  <img class='object-cover w-96 h-26' src={rectangle} />
                  <div class='h-60 flex-col justify-start items-start gap-6 flex'>
                    <div class='self-stretch text-center text-slate-900 text-3xl font-bold'>Security Personnel</div>
                    <div class='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                      From bodyguards, to events, businesses and static security, we’ll provide the right manned
                      security service and personnel tailored for you.
                    </div>
                    <div class='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
                      <BaseButton
                        className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E]'
                        content={'GET STARTED'}
                      />
                    </div>
                  </div>
                </div>
                <div class='p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                  <img class='object-cover w-96 h-26' src={construction} />
                  <div class='h-60 flex-col justify-start items-start gap-6 flex'>
                    <div class='self-stretch text-center text-slate-900 text-3xl font-bold'>Construction Security</div>
                    <div class='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                      Building sites can be a target for theft. Talk to us about keeping your construction site safe and
                      secure with a tailored security solution.
                    </div>
                    <div class='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
                      <BaseButton
                        className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E]'
                        content={'GET STARTED'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='min-w-full h-52 px-20 pt-20 bg-zinc-100 flex-col justify-start items-center gap-12 inline-flex'>
            <div class='self-stretch h-32 flex-col justify-start items-start gap-12 flex'>
              <div class='self-stretch h-16 flex-col justify-start items-center gap-2 flex'>
                <div class='self-stretch text-center text-black text-5xl font-bold'>Companies we’ve worked with</div>
              </div>
              <div class='self-stretch text-center text-black text-lg font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna.{' '}
              </div>
            </div>
          </div>

          <div class='min-w-full h-48 px-24 py-20 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex'>
            <div class='justify-end items-center gap-28'>
              <div class='inline-flex'>
                <div>
                  <img class='object-cover' src={slackLogo} alt='slackLogo' />
                </div>
                <div class='ml-10'>
                  <img class='object-cover' src={figmaLogo} alt='figmaLogo' />
                </div>
                <div class='ml-10'>
                  <img class='object-cover' src={microsoftLogo} alt='microsoftLogo' />
                </div>
                <div class='ml-10'>
                  <img class='object-cover' src={hupspotLogo} alt='hupspotLogo' />
                </div>
                <div class='ml-10'>
                  <img class='object-cover' src={outreachLogo} alt='outreachLogo' />
                </div>
                <div class='ml-10'>
                  <img class='object-cover' src={googleLogo} alt='googleLogo' />
                </div>
              </div>
            </div>
          </div>

          <div class='min-w-full px-24 py-20 bg-white flex-col justify-start items-center gap-16 inline-flex'>
            <div class='flex-col justify-start items-start gap-12 flex'>
              <div class='self-stretch h-14 flex-col justify-start items-center gap-2 flex'>
                <div class='self-stretch text-center text-zinc-800 text-5xl font-bold leading-10'>
                  The My Security Advantage
                </div>
              </div>
            </div>
            <div class='justify-start items-start gap-24 inline-flex'>
              <SecurityAdvantageCard
                srcImg={padlock}
                title='Security Solutions'
                description='One size fits all simply isn’t good enough when it comes to securing your most valued assets. MySecurity has the security solutions that are tailored to meet your unique needs. We always strive to ensure peace of mind and high level security for every situation'
              />
              <SecurityAdvantageCard
                srcImg={star}
                title='Client Satisfaction'
                description='We strive to amaze our customers. The opportunity to secure your most valued assets is a privilege, and we don’t take this privilege lightly. Putting our best foot forward is what we do for each project to ensure you are happy and your assets are kept safe and secure'
              />
            </div>
            <div class='justify-start items-start gap-24 inline-flex'>
              <SecurityAdvantageCard
                srcImg={users}
                title='Experience'
                description='Our managers have over 15 years of experience in security as well as hospitality, law, business and finance. Whether you’re looking for security for construction sites, property, business or events, we understand and can deliver what you need to keep your assets safe'
              />
              <SecurityAdvantageCard
                srcImg={periscope}
                title='Client Satisfaction'
                description='Our security services are available in all suburbs across Sydney, Brisbane and ACT. Wherever you are, we’ll provide a security solution. Do you have construction sites in multiple states? We can take care of your manpowered and electronic security across all locations'
              />
            </div>
            <BaseButton
              className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E]'
              content={'GET STARTED'}
            />
          </div>
          
        </main>
      </div>
    </>
  );
}

export default Home;
