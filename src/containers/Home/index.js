import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
import lightLogo from '../../assets/lightLogo.png';
import sendIcon from '../../assets/send.png';

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Booking', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SecurityAdvantageCard = ({ srcImg, title, description }) => {
  return (
    <div className='grow shrink basis-0 px-4 flex-col justify-start items-center gap-4 inline-flex'>
      <div className='self-stretch flex-col justify-start items-center gap-6 flex'>
        <img className='object-cover' src={srcImg} alt='Security Advantage' />
        <div className='self-stretch h-6 text-center text-black text-2xl font-extrabold leading-loose'>
          {title || ''}
          <br />
        </div>
        <div className='self-stretch text-center text-zinc-800 text-opacity-70 text-lg font-normal leading-relaxed'>
          {description || ''}
        </div>
      </div>
    </div>
  );
};

const CustomCard = ({ content, customerAvatar, customerPosition, customerName, classExtend }) => {
  return (
    <div
      className={`w-80 px-8 py-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-2.5 inline-flex ${classExtend}`}
    >
      <div className='self-stretch h-64 flex-col justify-start items-start gap-5 flex'>
        <img src={quote} alt='Quote' />
        <span className='text-black  leading-snug'>{content || ''}</span>
        <div className='self-stretch justify-start items-center gap-4 inline-flex'>
          <img src={customerAvatar} alt='Customer avatar' />
          <div className='grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex'>
            <div className='w-56 text-[#C7923E] text-xs font-bold uppercase '>{customerPosition || ''}</div>
            <div className='w-56 text-black text-base font-bold'>{customerName || ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className='w-full mx-auto max-w-screen-xl'>
      <Disclosure as='nav' className='bg-white'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2'>
              <div className='flex h-16 items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex flex-row items-center justify-between'>
                    <img className='w-7 h-7' src={logo} alt='Your Company' />
                    <div className='w-24 ml-5 text-gray-400 text-3xl font-bold'>Guard</div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-12 flex items-baseline space-x-11'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-[#C7923E]' : 'text-neutral-600',
                            'font-medium w-[66.75px]'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <Link to='/login'>
                      <BaseButton className='mt-2 flex justify-center items-center bg-[#C7923E]' content={'Login'} />
                    </Link>
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md text-[#C7923E] p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-[#C7923E]' : 'text-neutral-600',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className='border-t border-gray-700 pb-3 pt-4'>
                <div className='flex items-center px-5'>
                  <Link to='/login'>
                    <BaseButton className='mt-2 flex justify-center items-center bg-[#C7923E]' content={'Login'} />
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className='mb-20'>
        <div className='mx-auto relative'>
          <img className='w-screen h-auto mt-3' src={securityBanner} alt='Security banner' />
          <div className='w-102 h-48 absolute top-16 left-24 px-12 py-2'>
            <div className=' text-white text-5xl font-bold'>
              Security Services for <br /> Rent: Peace of Mind <br /> for Your Safety
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

        <div className='bg-white pb-36'>
          <div className='flex-col justify-start items-center gap-16 flex'>
            <div className='h-44 flex-col justify-start items-start gap-5 flex'>
              <div className='w-24 h-24 relative'></div>
              <div className='text-center text-black text-5xl font-bold'>Select Your Plan and Enjoy</div>
            </div>
            <div className='w-96 justify-center items-start gap-16 inline-flex'>
              <div className='p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                <img className='object-cover w-96 h-26' src={rectangle} />
                <div className='h-60 flex-col justify-start items-start gap-6 flex'>
                  <div className='self-stretch text-center text-slate-900 text-3xl font-bold'>Security Personnel</div>
                  <div className='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                    From bodyguards, to events, businesses and static security, we’ll provide the right manned security
                    service and personnel tailored for you.
                  </div>
                  <div className='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
                    <BaseButton
                      className='w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E]'
                      content={'GET STARTED'}
                    />
                  </div>
                </div>
              </div>
              <div className='p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex'>
                <img className='object-cover w-96 h-26' src={construction} />
                <div className='h-60 flex-col justify-start items-start gap-6 flex'>
                  <div className='self-stretch text-center text-slate-900 text-3xl font-bold'>
                    Construction Security
                  </div>
                  <div className='self-stretch h-16 text-center text-gray-400 text-lg font-medium '>
                    Building sites can be a target for theft. Talk to us about keeping your construction site safe and
                    secure with a tailored security solution.
                  </div>
                  <div className='w-96 h-24 flex-col justify-end items-center gap-2.5 flex'>
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

        <div className='min-w-full h-52 px-20 pt-20 bg-zinc-100 flex-col justify-start items-center gap-12 inline-flex'>
          <div className='self-stretch h-32 flex-col justify-start items-start gap-12 flex'>
            <div className='self-stretch h-16 flex-col justify-start items-center gap-2 flex'>
              <div className='self-stretch text-center text-black text-5xl font-bold'>Companies we’ve worked with</div>
            </div>
            <div className='self-stretch text-center text-black text-lg font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna.{' '}
            </div>
          </div>
        </div>

        <div className='min-w-full h-48 px-24 py-20 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex'>
          <div className='justify-end items-center gap-28'>
            <div className='inline-flex'>
              <div>
                <img className='object-cover' src={slackLogo} alt='slackLogo' />
              </div>
              <div className='ml-10'>
                <img className='object-cover' src={figmaLogo} alt='figmaLogo' />
              </div>
              <div className='ml-10'>
                <img className='object-cover' src={microsoftLogo} alt='microsoftLogo' />
              </div>
              <div className='ml-10'>
                <img className='object-cover' src={hupspotLogo} alt='hupspotLogo' />
              </div>
              <div className='ml-10'>
                <img className='object-cover' src={outreachLogo} alt='outreachLogo' />
              </div>
              <div className='ml-10'>
                <img className='object-cover' src={googleLogo} alt='googleLogo' />
              </div>
            </div>
          </div>
        </div>

        <div className='min-w-full px-24 py-20 bg-white flex-col justify-start items-center gap-16 inline-flex'>
          <div className='flex-col justify-start items-start gap-12 flex'>
            <div className='self-stretch h-14 flex-col justify-start items-center gap-2 flex'>
              <div className='self-stretch text-center text-zinc-800 text-5xl font-bold leading-10'>
                The My Security Advantage
              </div>
            </div>
          </div>
          <div className='justify-start items-start gap-24 inline-flex'>
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
          <div className='justify-start items-start gap-24 inline-flex'>
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

        <div className='mx-auto relative'>
          <img className='w-screen h-auto mt-3' src={tryStaffBanner} alt='Banner' />
          <div className='w-102 h-48 absolute top-16 left-24 px-12 py-2'>
            <div className='w-96 h-36 text-white text-6xl font-bold '>Try Staff With Us</div>
            <div className='w-96 h-16 text-neutral-400 text-base font-medium leading-10'>
              Earn extra just by renting your property...
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
          </div>
        </div>
        <div className='min-w-full pb-10 px-20 pt-20 bg-zinc-100 flex-col justify-start items-center gap-12 inline-flex'>
          <div className='self-stretch flex-col justify-start items-center text-center text-black text-5xl font-bold'>
            What our customers say
          </div>
        </div>

        <div className='min-w-full px-24 py-20 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex'>
          <div className='justify-end items-center flex flex-col sm:flex-row ever'>
            <CustomCard
              content="“The security team provided by Guard was incredibly professional and attentive. They gave us peace of mind during our event, and we couldn't be happier with their service.”"
              customerAvatar={sontungAvatar}
              customerName='Son tung M-TP'
              customerPosition='SingerSinger'
            />
            <CustomCard
              classExtend='mx-10 mt-6 sm:mt-0'
              content='“I didn’t have the time or expertise to undertake marketing. Kalungi has a very well thought out approach… and the fact that you can get their team on a fractional basis is unbelievable.”'
              customerAvatar={stijnAvatar}
              customerName='Stijn Hendrikse'
              customerPosition='Co-founder, Kalungi'
            />
            <CustomCard
              classExtend='mt-6 sm:mt-0'
              content='“I didn’t have the time or expertise to undertake marketing. Kalungi has a very well thought out approach… and the fact that you can get their team on a fractional basis is unbelievable.”'
              customerAvatar={stijnAvatar}
              customerName='Stijn Hendrikse'
              customerPosition='Co-founder, Kalungi'
            />
          </div>
        </div>

        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mt-20'>
          <div className='flex-col justify-start items-start gap-10 inline-flex'>
            <div className='flex-col justify-start items-start flex'>
              <div className='pb-10 text-slate-900 text-4xl font-bold leading-10 '>Bodyguard Services in VietNam</div>
              <div className='mr-10 text-zinc-800 text-lg font-normal'>
                <span>
                  Bodyguards aren’t just for the rich and famous. There are numerous reasons why you might need to hire
                  a professional bodyguard. Your professional or social possition could be putting you at risk. Our
                  bodyguards can help protect:
                </span>
                <ul className='list-disc ml-6'>
                  <li>High-profile professionals</li>
                  <li>Celebrities</li>
                  <li>Activists</li>
                  <li>Politicians</li>
                </ul>
              </div>
            </div>
            <BaseButton
              className='w-40 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E] md:flex md:w-60'
              content={'GET STARTED'}
            />
          </div>
          <img
            className='object-cover h-96 mt-10 md:mt-0'
            src={BodyguardServicesSydney}
            alt='BodyguardServicesSydney'
          />
        </div>

        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mt-20'>
          <img
            className='object-cover h-96 mt-10 md:mt-0 mr-10'
            src={BodyguardServicesSydney}
            alt='BodyguardServicesSydney'
          />
          <div className='flex-col justify-start items-start gap-10 inline-flex'>
            <div className='flex-col justify-start items-start flex'>
              <div className='pb-10 text-slate-900 text-4xl font-bold leading-10 '>Bodyguard Services in VietNam</div>
              <div className='text-zinc-800 text-lg font-normal'>
                <span>
                  Bodyguards aren’t just for the rich and famous. There are numerous reasons why you might need to hire
                  a professional bodyguard. Your professional or social possition could be putting you at risk. Our
                  bodyguards can help protect:
                </span>
                <ul className='list-disc ml-6'>
                  <li>High-profile professionals</li>
                  <li>Celebrities</li>
                  <li>Activists</li>
                  <li>Politicians</li>
                </ul>
              </div>
            </div>
            <BaseButton
              className='w-40 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E] md:flex md:w-60'
              content={'GET STARTED'}
            />
          </div>
        </div>

        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mt-20'>
          <div className='flex-col justify-start items-start gap-10 inline-flex'>
            <div className='flex-col justify-start items-start flex'>
              <div className='pb-10 text-slate-900 text-4xl font-bold leading-10 '>Bodyguard Services in VietNam</div>
              <div className='mr-10 text-zinc-800 text-lg font-normal'>
                <span>
                  Bodyguards aren’t just for the rich and famous. There are numerous reasons why you might need to hire
                  a professional bodyguard. Your professional or social possition could be putting you at risk. Our
                  bodyguards can help protect:
                </span>
                <ul className='list-disc ml-6'>
                  <li>High-profile professionals</li>
                  <li>Celebrities</li>
                  <li>Activists</li>
                  <li>Politicians</li>
                </ul>
              </div>
            </div>
            <BaseButton
              className='w-40 h-14 px-3 py-4 mt-6 items-center text-xs font-bold bg-[#C7923E] md:flex md:w-60'
              content={'GET STARTED'}
            />
          </div>
          <img
            className='object-cover h-96 mt-10 md:mt-0'
            src={BodyguardServicesSydney}
            alt='BodyguardServicesSydney'
          />
        </div>
      </main>

      {/* footer */}
      <footer className='w-full flex flex-col sm:flex-row items-center '>
        <div className='bg-[#27343F] w-full sm:w-1/2 p-12 flex flex-col justify-between h-96'>
          <div className='w-auto text-white text-4xl font-bold tracking-tight'>
            If you have any question, Let us help you!
          </div>
          <div className='flex flex-wrap'>
            <input className='rounded-lg w-96 h-14 px-4' placeholder='Input your email here' />
            <button className='bg-[#C7923E] px-4 w-16 h-14 rounded-lg flex items-center justify-center ml-2'>
              <img src={sendIcon} alt='Send icon' />
            </button>
          </div>
          <div className='w-96 text-white  leading-tight tracking-tight'>Copyright GuardGuard Studio</div>
        </div>
        <div className='bg-[#1A242D] w-full sm:w-1/2 p-12 flex flex-col justify-between h-106 md:h-96'>
          <div className='flex flex-row items-center'>
            <img className='w-7 h-7' src={lightLogo} alt='Light logo' />
            <div className='w-24 ml-5 text-[#9A9AB0] text-3xl font-bold'>Guard</div>
          </div>
          <div className='text-white  leading-tight tracking-tight mt-4 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className=' text-white  leading-tight tracking-tight mt-4'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6'>
              <div>Home</div>
              <div>About Us</div>
              <div>Our Team</div>
              <div>Room & Suites</div>
              <div>Restaurant & Bar</div>
              <div>Blog</div>
              <div>Packages</div>
              <div>Events</div>
              <div>Contact Us</div>
              <div>Voucher</div>
              <div>Gallery</div>
              <div>Careers</div>
              <div>Promo</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
