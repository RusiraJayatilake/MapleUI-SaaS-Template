import PaymentCard from "@/src/components/cards/payments/payment-card";

const PaymentPage = () => {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <PaymentCard />
        </div>
        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          Powered by {""}
          <a href="https://stripe.com/nz/lp/payments/payment-processing?utm_campaign=APAC_APAC_NZ_EN_Search_Brand_Core_EXA-PHR-2024.06_LP-SEM-Ungated-21292808761&utm_medium=cpc&utm_source=google&ad_content=703668270150&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gad_source=1&gclid=CjwKCAiA5pq-BhBuEiwAvkzVZVGYGsMhIU95IF3b9Yz82wz47rNp32Xp8F6ma2c4gVp_eBdu47k3LhoCbnwQAvD_BwE">
            Stripe Payments
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
