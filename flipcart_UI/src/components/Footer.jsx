import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800   text-white text-sm p-5">
      <div className="flex justify-evenly">
        <div className="left flex justify-evenly w-6/10 gap-10">
          <div>
            <p className="text-gray-500  ">ABOUT</p>
            <ul>
              <li>contact us</li>
              <li>contact us</li>
              <li>contact us</li>
              <li>contact us</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-500">GROUP COMPANIES</p>
            <ul>
              <li>Myntra</li>
              <li>Amezon</li>
              <li>Zudio</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-500">HELP</p>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>FAQ</li>
              <li>Report</li>
              <li>Cancellation & Return</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-500">CONSIMER POLICY</p>
            <ul>
              <li>Security</li>
              <li>Security</li>
              <li>Security</li>
              <li>Security</li>
              <li>Security</li>
              <li>Security</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="right flex justify-evenly w-4/10 gap-10">
          <div className="w-[300px]">
            <p className="text-gray-500  ">CONTACT US</p>
            <p>
              ydpatel0309@g,ail.com, Address :- 3,Ruchita Park
              society,Godhra,Gujarat
              <br></br>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              quibusdam inventore. Autem non sint dignissimos placeat
              consequatur assumenda quisquam pariatur a perspiciatis enim
              numquam modi quis, ducimus necessitatibus perferendis dolore.
            </p>
          </div>
          <div className="w-[300px]">
            <p className="text-gray-500">GROUP COMPANIES</p>
            <p>
              Flipcart INDIA private limited<br></br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              distinctio minima, qui voluptas ut obcaecati, fuga debitis ipsa
              dicta voluptates, culpa delectus ducimus deleniti voluptatum
              quaerat vero. Modi, porro enim.
            </p>
          </div>
        </div>
      </div>

      <div class="   rounded-lg shadow m-4 bg-gray-900">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              YASH PATEL
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
