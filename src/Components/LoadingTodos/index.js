export function LoadingTodos() {
    return (
        <li className="my-8 mx-4 p-4 rounded-2xl bg-white border border-gray-300">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-300 h-6 w-6"></div>
                
                <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-gray-300 rounded"></div>
                </div>
            </div>
        </li>
    )
}
