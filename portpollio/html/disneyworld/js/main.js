//페이지 로드 이벤트
window.addEventListener('load',()=>{
    const grid = new Isotope('section',{/* 배치할 요소를 감싸는 부모명 */
        itemSelector : 'article',/* 배치할 요소명 */
        columWidth : 'article' ,/* 너비값을 구할 요소명 */
        transitionDuration : '0.5s'/* 화면 재배치시 요소가 움직이는 속도 */
    });

    //클린한 모든 버튼을 변수에 저장
    const btns = document.querySelectorAll('main ul li');
    //버튼의 개수만큼 반복해서 
    for( let el of btns){
        el.addEventListener('click',e=>{
            e.preventDefault(); //a링크를 안되게 만들어놓고
            //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값저장
            const sort=e.currentTarget.querySelector('a').getAttribute('href');
            //grid에 저장된 결과값을 불러와 재정렬 기능 연결
            grid.arrange({
                //옵션값으로 sort 변수값 지정 
                filter:sort
            });

            //다시 모든 버튼의 개수만큼 반복해서
            for(let el of btns){
                el.classList.remove('on');
            }

            //클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
            e.currentTarget.classList.add('on');
        });
    }
});