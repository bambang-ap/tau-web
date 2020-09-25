import React, { useEffect } from 'react';
import HomeRoute from './Home';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import AkademikRoute from './Akademik';
import Fasilitas from 'src/pages/Home/Fasilitas';
import { useDispatch } from 'react-redux';
import actionsWeb from 'src/redux/actions/web';
import Article from 'src/pages/Article';
import InformasiBerita from 'src/pages/Home/InformasiBerita';
import RedirectArticle from 'src/components/RedirectArticle';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import Tentang from 'src/pages/Tentang';
import BoardOfAdvisors from 'src/pages/Home/BoardOfAdvisors';
// import Article from 'src/pages/Article';

const Routes = ({ className }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const { pathname } = window.location

	const effect = () => {
		if (pathname === '/')
			history.push('/home')
		history.listen(() => {
			// window.scrollTo({ top: 0, behavior: 'smooth' })
			dispatch(actionsWeb({ noBanner: false, noFooter: false }))
		})
	}

	useEffect(effect, [])

	return <div className={className}>
		<Switch>
			<Route path="/home" component={HomeRoute} />
			<Route path="/tentang" exact component={() => <Redirect to="/tentang/visi" />} />
			<Route path="/tentang/:part" component={Tentang} />
			<Route path="/akademik" component={AkademikRoute} />
			<Route path="/fasilitas" component={Fasilitas} />
			<Route path="/board-of-advisors" component={BoardOfAdvisors} />
			<Route path="/info" render={() => <Redirect to="/info/berita" />} exact />
			<Route path="/info/berita" exact component={InformasiBerita} />
			<Route path="/karir" exact component={() => <RedirectArticle part="career" />} />
			<Route path="/pendaftaran" exact component={() => <div className="ai-c flex flex-col p-15">
				<h4>Formulir Pendaftaran</h4>
				<div className="flex w-2/3 mt-3 brd-5 b-1 p-5 flex-col">
					<div className="flex mb-3 ai-c">
						<div className="flex flex-1">Nama Lengkap<i style={{ color: 'red' }}>*</i></div>
						<div className="flex flex-1">
							<Input />
						</div>
					</div>
					<div className="flex mb-3 ai-c">
						<div className="flex flex-1">Tanggal Lahir<i style={{ color: 'red' }}>*</i></div>
						<div className="flex flex-1">
							<Input />
						</div>
					</div>
					<div className="flex mb-3 jc-fe">
						<Button>DAFTAR</Button>
					</div>
				</div>
			</div>} />
			<Route path="/404" component={() => <div className="flex flex-col flex-1 ai-c p-30">
				<div className="f-30 c-grey-hard">404</div>
				<div>Halaman yang anda minta tidak ditemukan</div>
			</div>} />
			<Route path="/studi-tracer" component={() => <RedirectArticle part="tracer" />} />
			<Route path="/form-mhs" component={() => <RedirectArticle part="kemahasiswaan" />} />
			<Route path="/daftar-beasiswa" component={() => <RedirectArticle part="beasiswa" />} />
			<Route path="/daftar-online" component={() => <RedirectArticle part="online-registration" />} />
			<Route path="/:url" component={Article} />
		</Switch>
	</div>
}

export default Routes