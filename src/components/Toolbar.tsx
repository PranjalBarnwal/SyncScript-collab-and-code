import Button from "./Button";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function Toolbar() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <fieldset className="flex flex-row font-poppins  items-center text-primary h-full w-full border-primary border-[1px] rounded-lg  z-20 px-5 space-x-5">
      <legend className="text-lg px-2 font-extralight">Toolbar</legend>

      

      <Menu as="div" className="relative inline-block text-left">
  <div>
    <Menu.Button className="border-primary h-[2.2rem] flex items-center border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
      Options
      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-10 -mt-[9rem] w-40 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Support
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              License
            </a>
          )}
        </Menu.Item>
        <form method="POST" action="#">
          <Menu.Item>
            {({ active }) => (
              <button
                type="submit"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block w-full px-4 py-2 text-left text-sm'
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </form>
      </div>
    </Menu.Items>
  </Transition>
</Menu>


      <Button title="Theme" />
      <Button title="Share snippet" />
      <Button title="Run Code" />
    </fieldset>
  );
}
