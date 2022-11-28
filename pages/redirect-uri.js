import MainLayout from "../components/layouts/MainLayout";
import { useRouter } from "next/router"
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect } from "react";

import axios from "axios";

export default function RedirectUri() {
    const router = useRouter();
    const hash = router.asPath.split('#')[1];
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");

    useEffect(() => {
        console.log(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        router.push("/", "/", { shallow: true });
    }, [])

    return (
        <MainLayout>
        </MainLayout>
    )
}