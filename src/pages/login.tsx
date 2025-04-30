import {NavLink} from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직
  };

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-wrapper">

      {/* 로고 컨테이너 */}
      <div className="logo-container">
        {/* 메인 페이지로 이동 */}
        <a className="logo-link" href="/">
          <img src="/logo.png" alt="logo"/>
        </a>
      </div>

      {/* 로그인 폼 : 보안을 위해 post로 전송 */}
      <form className="login-form" method="POST" onSubmit={handleSubmit}>

        {/* 이메일 입력 필드 */}
        <div className="form-field">
          <label htmlFor="email">이메일</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="email"
              placeholder="이메일"
              name="email" // name : formData 입력 시 key로 사용
            />
          </div>
          {/* 에러 메시지 */}
          <div className='error-container'>
            <small className="error-message">없는 아이디입니다.</small>
            <NavLink to="/sign-up">
              간편 회원가입
            </NavLink>
          </div>
        </div>

        {/* 비밀번호 입력 필드 */}
        <div className="form-field">
          <label htmlFor="password">비밀번호</label>
          <div className="input-wrapper">
            <input
              type={"password"}
              id="password"
              placeholder="비밀번호"
              name="password"
            />
          </div>
          <div className={'toggle-toggle-container'} onClick={togglePasswordVisibility}>
            <i className={'fa-eye-slash'}/>
            <i className={'fa-eye'}/>
          </div>
          {/* 에러 메시지 */}
          <div className='error-container'>
            <small className="error-message">틀린 비밀번호입니다. (비밀번호 : 영문, 숫자를 포함 최소 8자리)</small>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button className="login-button" type="submit">로그인</button>

        <div className="signup-prompt">
          <span>회원이 아니신가요?</span>
          <NavLink to="/sign-up" className="signup-link">간편 회원가입</NavLink>
        </div>

      </form>

    </div>
  )};

export default Login;