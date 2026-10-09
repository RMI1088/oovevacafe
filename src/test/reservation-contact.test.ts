import { describe, expect, it } from "vitest";

import { business } from "@/content/ooveva";

const MESSAGE =
  "Hello Ooveva Café! I'd like to enquire about reserving a table. Could you please let me know the availability?";

describe("Reservation contact", () => {
  it("opens WhatsApp with the verified number and the pre-filled message", () => {
    const [base, text] = business.whatsappUrl.split("?text=");

    expect(base).toBe("https://wa.me/918977395454");
    expect(text).toBeTruthy();
    expect(decodeURIComponent(text!)).toBe(MESSAGE);
  });

  it("keeps the call button on the same verified number", () => {
    expect(business.phoneDisplay).toBe("+91 89773 95454");
    expect(business.phoneUrl).toBe("tel:+918977395454");
  });
});
