import React, {useCallback, useState} from "react";
import debounce from "../utils/debounce.ts";

const Signup = () => {

    const [email, setEmail] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const validateEmail = useCallback((email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, []);

    const debouncedValidateEmail = useCallback(
      debounce((emailValue: string) => {
            setIsValidEmail(validateEmail(emailValue));
      }, 700),
      [validateEmail]
    );

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        debouncedValidateEmail(emailValue);
    };

    return (
        <div className="signup-page-wrapper">

            {/* 로고 컨테이너 */}
            <div className="logo-container">
                <a className="logo-link" href="/">
                    <img src="/logo.png" alt="logo"/>
                </a>
            </div>

            {/* 회원가입 폼 */}
            <form className="signup-form" method="POST">

                {/* 이메일 입력 필드 */}
                <div className="form-field">
                    {/*  text-base : 1rem, mb-1: margin-bottom: 0.25rem */}
                    <label htmlFor="email" className="block text-base text-gray-800 font-bold mb-1">이메일</label>
                    <div className="relative w-full">
                        <input
                            className="border border-gray-200 rounded w-full p-2.5 mt-1 mb-1 text-sm focus:outline-none focus:border-gray-500 focus:ring-1  focus:ring-gray-500"
                            type="text"
                            id="email"
                            placeholder="이메일"
                            name="email" // name : formData 입력 시 key로 사용
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    {/* 에러 메시지 */}
                    {!isValidEmail && (
                        <div
                            className="mt-1 flex items-center gap-2 p-2 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 9v2m0 4h.01m6.938-4A9.003 9.003 0 0112 21a9.003 9.003 0 01-6.938-11A9.003 9.003 0 0112 3a9.003 9.003 0 016.938 11z"></path>
                            </svg>
                            <small>올바른 이메일 형식을 입력하세요.</small>
                        </div>
                    )}
                </div>

                {/*/!* 이름 입력 필드 *!/*/}
                {/*<div className="form-field">*/}
                {/*  <label htmlFor="name">이름</label>*/}
                {/*  <div className="input-wrapper">*/}
                {/*    <input*/}
                {/*      type="text"*/}
                {/*      id="name"*/}
                {/*      placeholder="이름"*/}
                {/*      name="name"*/}
                {/*      value={formData.name}*/}
                {/*      onChange={handleChange}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  /!* 에러 메시지 *!/*/}
                {/*  {errors.name && (*/}
                {/*    <div className='error-container'>*/}
                {/*      <small className="error-message">{errors.name}</small>*/}
                {/*    </div>*/}
                {/*  )}*/}
                {/*</div>*/}

                {/*/!* 비밀번호 입력 필드 *!/*/}
                {/*<div className="form-field">*/}
                {/*  <label htmlFor="password">비밀번호</label>*/}
                {/*  <div className="input-wrapper">*/}
                {/*    <input*/}
                {/*      type={showPassword ? "text" : "password"}*/}
                {/*      id="password"*/}
                {/*      placeholder="비밀번호 (영문, 숫자 포함 8자 이상)"*/}
                {/*      name="password"*/}
                {/*      value={formData.password}*/}
                {/*      onChange={handleChange}*/}
                {/*    />*/}
                {/*    <div className="toggle-password" onClick={togglePasswordVisibility}>*/}
                {/*      <i className={showPassword ? 'fa-eye' : 'fa-eye-slash'} />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  /!* 에러 메시지 *!/*/}
                {/*  {errors.password && (*/}
                {/*    <div className='error-container'>*/}
                {/*      <small className="error-message">{errors.password}</small>*/}
                {/*    </div>*/}
                {/*  )}*/}
                {/*</div>*/}

                {/*/!* 비밀번호 확인 입력 필드 *!/*/}
                {/*<div className="form-field">*/}
                {/*  <label htmlFor="confirmPassword">비밀번호 확인</label>*/}
                {/*  <div className="input-wrapper">*/}
                {/*    <input*/}
                {/*      type={showConfirmPassword ? "text" : "password"}*/}
                {/*      id="confirmPassword"*/}
                {/*      placeholder="비밀번호 확인"*/}
                {/*      name="confirmPassword"*/}
                {/*      value={formData.confirmPassword}*/}
                {/*      onChange={handleChange}*/}
                {/*    />*/}
                {/*    <div className="toggle-password" onClick={toggleConfirmPasswordVisibility}>*/}
                {/*      <i className={showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  /!* 에러 메시지 *!/*/}
                {/*  {errors.confirmPassword && (*/}
                {/*    <div className='error-container'>*/}
                {/*      <small className="error-message">{errors.confirmPassword}</small>*/}
                {/*    </div>*/}
                {/*  )}*/}
                {/*</div>*/}

                {/*/!* 회원가입 버튼 *!/*/}
                {/*<button className="signup-button" type="submit">회원가입</button>*/}

                {/*<div className="login-prompt">*/}
                {/*  <span>이미 계정이 있으신가요?</span>*/}
                {/*  <NavLink to="/sign-in" className="login-link">로그인</NavLink>*/}
                {/*</div>*/}
            </form>
        </div>
    );
};

export default Signup;






