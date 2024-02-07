export default function Tabs({ children, tabs, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{tabs}</ButtonsContainer>
      {children}
    </>
  );
}
