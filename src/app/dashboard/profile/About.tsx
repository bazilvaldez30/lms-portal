import React from "react";

export default function About() {
  return (
    <section>
      <div className="space-y-6">
        <h3 className="text-lg">About</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className=" text-custom-11">Fullname:</span>
            <p className="font-medium">John Bazil Valdez</p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Address:</span>
            <p className="font-medium">
              1234 Cordero, Lambakin, Marilao, Bulacan
            </p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Birthday:</span>
            <p className="font-medium">January 1, 2000</p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Gender:</span>
            <p className="font-medium">Male</p>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <h3 className="text-lg">Contacts</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className=" text-custom-11">Email:</span>
            <p className="font-medium">janesmith@mail.com</p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Contact:</span>
            <p className="font-medium">+63 912 345 6789</p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Guardian:</span>
            <p className="font-medium">Evelyn Smith</p>
          </div>
          <div className="flex gap-3">
            <span className=" text-custom-11">Contact:</span>
            <p className="font-medium">+63 998 765 4321</p>
          </div>
        </div>
      </div>
    </section>
  );
}
