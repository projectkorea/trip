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
          onMouseOver={(e) => (e.currentTarget.style.background = '#d7bfe0')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#efecec')}
        >
          <span style={{ fontSize: '30px' }}>🔙</span>
        </div>
      )}
    </>
  );
}

export default CityBackButton;
