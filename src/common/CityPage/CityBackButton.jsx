import usePlan from '@store/usePlan';

function CityBackButton() {
  const { progress, setPreviousProgress } = usePlan();

  return (
    <>
      {progress > 1 && (
        <div
          style={{
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
            border: '1px solid #ddd',
          }}
          onClick={setPreviousProgress}
          onMouseOver={(e) => (e.currentTarget.style.background = '#e0e0e0')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#f0f0f0')}
        >
          🔙 뒤로가기
        </div>
      )}
    </>
  );
}

export default CityBackButton;
