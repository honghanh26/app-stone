import React from "react";

export default function Contact() {
  return (
    <main className="py-5">
      <div className="container mx-auto">
        <p className="text-uppercase">
          <span style={{ color: "#ff6600" }}>
            <strong>Đá Hoa Cương Cao Cấp – ATC Stone</strong>
            &nbsp;
          </span>
        </p>
        <p className="text-uppercase">
          <span style={{ color: "#ff6600" }}>
            <strong>Add</strong>:
          </span>
          1063C Nguyễn Xiển, P.Long Bình, Q. 9, Tp.HCM
        </p>
        <p className="text-uppercase">
          <span style={{ color: "#ff6600" }}>
            <strong>Hotline:</strong>&nbsp;08 999 06 000 &ndash;&nbsp;
          </span>
          0908 099 419
        </p>
        <div>
          <p>
            <span style={{ color: "#ff6600" }}>
              <span style={{ fontSize: "14px" }}>Email :</span>
            </span>
            atcstone999@gmail.com &nbsp;&ndash;&nbsp;website: atcstone.vn
          </p>
        </div>
        <p>
          <iframe
            style={{ border: 0 }}
            tabIndex={0}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.56087810156527!2d106.83706684637475!3d10.861735661408485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521e4453414e3%3A0x5c61dcc44d4e208b!2zxJDDoSBIb2EgQ8awxqFuZyBBVEM!5e0!3m2!1svi!2s!4v1601693464387!5m2!1svi!2s"
            width="100%"
            height="600"
            allowFullScreen
            aria-hidden="false"
          ></iframe>
        </p>
      </div>
    </main>
  );
}
