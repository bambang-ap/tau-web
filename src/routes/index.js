import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
const HomeRoute = lazy(() => import('./Home'));
const AkademikRoute = lazy(() => import('./Akademik'));
const Fasilitas = lazy(() => import('src/pages/Home/Fasilitas'));
const actionsWeb = lazy(() => import('src/redux/actions/web'));
const Article = lazy(() => import('src/pages/Article'));
const InformasiBerita = lazy(() => import('src/pages/Home/InformasiBerita'));
const RedirectArticle = lazy(() => import('src/components/RedirectArticle'));
const Tentang = lazy(() => import('src/pages/Tentang'));
const BoardOfAdvisors = lazy(() => import('src/pages/Home/BoardOfAdvisors'));

const LazyRoutes = ({ className }) => {
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

const Routes = () => {
	return <Suspense fallback={<div />}>
		<LazyRoutes />
	</Suspense>
}

export default Routes