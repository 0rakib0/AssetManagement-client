import useAdmin from "../../../Hooks/useAdmin"

const HomeDashbord = () => {
    const [isAdmin, adminLoading] = useAdmin()
    if (adminLoading) {
        return 'Loadin......'
    }
    // Admin Dashbord Section



    // Employee Dashbord Section



    const isAdmin2 = isAdmin
    return (
        <div className="mt-12 pl-8 bg-red-200">
            {isAdmin2 ? <>
                <h1>This is admin Dashbord</h1>
            </> :
            <>
            <h1>This is Employee Dashbord</h1>
            </>}
        </div>
    )
}
export default HomeDashbord