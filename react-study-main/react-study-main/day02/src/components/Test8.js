const Test8 = () => {
    const handleClick1 = ()  => {
        alert('test1')
    }

    const handleClick2 = ()  => {
        alert('test2')
    }
    
    const handleClick3 = ()  => {
        alert('test3')
    }
    
    const make1 = ( num )  => {
        alert(`${num} 입니다.`)
    }
    
    const make2 = ( num )  => {
        alert(`${num} 입니다.`)
    }

    return (
        <div>
            <h2> 이벤트 :  on+첫글자대문자 : onClick </h2>
            <p>
                <button onClick={ handleClick1 }>클릭</button>
                <button onClick={ handleClick2 }>클릭</button>
                <button onClick={ handleClick3 }>클릭</button>
            </p>
            <p>
                <button onClick={ () => {
                    console.log('test1')
                    console.log('test1')
                    console.log('test1')
                    console.log('test1')
                    //여러줄일경우 {}을 생략하면안된다 그안에 작성한다 
                } }>클릭</button>
                <button onClick={ ()  => alert('test') }>클릭</button>            
            </p>
            <p>
                {/* 
                    함수는 함수()쓰면 무조건호출 , 처음부터 실행 
                    값넘길때 함수(값) => 함수(매개변수)로 받기 
                    해결 
                    함수로 한번 묶어준다
                    () => 함수명(값)
                */}
                <button onClick={ () => make1(100) }>클릭</button>
                <button onClick={ () => make2(200) }>클릭</button>            
            </p>
        </div>
    );
};

export default Test8;