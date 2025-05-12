const API_BASE_URL = import.meta.env.VITE_API_URL;

const AUTH_URL = `${API_BASE_URL}/api/users`;

// 이메일 중복 확인
const checkDuplicateEmail = async (email: string): Promise<boolean | never> => {
    try {
        console.log(encodeURIComponent(email));
        // encodeURIComponent를 사용하여 이메일 주소를 인코딩(특수문자용)
        const response = await fetch(`${AUTH_URL}/email_availability?email=${encodeURIComponent(email)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data.available; // 서버에서 반환하는 available 필드 반환
    } catch (error) {
        console.error('이메일 중복 확인 중 오류 발생:', error);
        throw new Error('이메일 중복 확인 중 오류가 발생했습니다');
    }
}

export { checkDuplicateEmail };